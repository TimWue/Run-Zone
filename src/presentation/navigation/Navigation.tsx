import { FunctionComponent } from "react";
import { Path } from "../shared/Path";
import { NavLink } from "./NavLink";
import { Button } from "react-bootstrap";
import { useRunsController } from "../../controller/runs/useRunsController";

interface Props {}

export const Navigation: FunctionComponent<Props> = () => {
  const controller = useRunsController();
  return (
    <div>
      <NavLink to={Path.NEW} value={"Neu"} />
      <NavLink to={Path.RUNS} value={"Läufe"} />
      <Button variant="dark" onClick={() => controller.removeRunner()}>
        Logout
      </Button>
    </div>
  );
};
