import {
  index,
  layout,
  route
} from "@react-router/dev/routes";

export default [
  layout("pages/layout/Public/index.tsx", [
    index("pages/public/Home/index.tsx", {}),
  ]),

  layout("pages/layout/Clear/index.tsx", [
    route("login", "pages/public/Login/index.tsx", {}),
  ]),

]; 