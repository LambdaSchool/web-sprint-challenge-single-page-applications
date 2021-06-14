import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required().min(2, "Name must be more then 2 charaters!"),
  size: yup.string().oneOf(["12", "14", "18", "half", "full"]),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  onion: yup.boolean(),
  extraCheese: yup.boolean(),
  pinapple: yup.boolean(),
  special: yup.string(),
});
