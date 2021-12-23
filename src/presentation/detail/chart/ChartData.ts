export class ChartData {
  static readonly DISTANCE = new ChartData(
    "distance",
    "distance [km]",
    "Distance"
  );
  static readonly SPEED = new ChartData("speed", "speed [km/h]", "Speed");
  static readonly ALTITUDE = new ChartData(
    "altitude",
    "altitude [m]",
    "Altitude"
  );
  private constructor(
    public readonly dataKey: string,
    public readonly name: string,
    public readonly displayName: string
  ) {}
}
