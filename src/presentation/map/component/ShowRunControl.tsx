import { FunctionComponent } from "react";

interface Props {
  setShowRuns: any;
}

const ShowRunControl: FunctionComponent<Props> = ({ setShowRuns }: Props) => {
  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control">
        <button onClick={() => setShowRuns((oldState: any) => !oldState)}>
          Show Runs
        </button>
      </div>
    </div>
  );
};

export default ShowRunControl;
