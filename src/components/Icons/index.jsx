import { ReactComponent as logo } from "./svgs/logo.svg";
import { ReactComponent as whatsapp } from "./svgs/whatsapp.svg";
import { ReactComponent as location } from "./svgs/location.svg";
import { ReactComponent as facebook } from "./svgs/facebook.svg";
import { ReactComponent as instagram } from "./svgs/instagram.svg";
import { ReactComponent as twitter } from "./svgs/twitter.svg";

const Icons = {
  logo,
  whatsapp,
  location,
  facebook,
  instagram,
  twitter,
};

export const Icon = ({ name, ...props }) => {
  const Element = Icons[name];
  return <Element {...props} />;
};
