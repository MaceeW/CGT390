import { useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProfileContext from "../context/ProfileContext";

const initialState = {
  values: { name: "", title: "", email: "", bio: "", img: null },
  errors: {},
  touched: {},
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        values: { ...state.values, [action.payload.field]: action.payload.value },
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) =>
  String(s ?? "")
    .trim()
    .replace(/\s+/g, " ");

export const useFormReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { addProfile } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const fieldValue = type === "file" ? files[0] : value;
    dispatch({ type: "SET_FIELD_VALUE", payload: { field: name, value: fieldValue } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, title, email, bio, img } = state.values;
    if (!name || !title || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    const newProfile = {
      id: Date.now(),
      name: stripTags(trimCollapse(name)),
      title: stripTags(trimCollapse(title)),
      email: stripTags(trimCollapse(email)),
      bio: stripTags(bio),
      img: img ? URL.createObjectURL(img) : "https://via.placeholder.com/150",
    };

    addProfile(newProfile);
    dispatch({ type: "RESET_FORM" });
    navigate("/", { replace: true });
  };

  return { state, handleChange, handleSubmit };
};
