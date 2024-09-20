import { Menu } from "react-feather";
import Button from "../Button";
import styles from "./MobileMenuToggle.module.scss";

const MobileMenuToggle = () => {
  return (
    <Button unstyled>
      <Menu />
    </Button>
  );
};

export default MobileMenuToggle;
