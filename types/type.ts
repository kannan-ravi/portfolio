export type skillsType = {
  id?: number;
  name: string;
  color: string;
  Icon: React.ElementType;
};

export type tabTypes = "work" | "studies";

export type TimelineEntry = {
  id: number;
  title: string;
  from: string;
  to: string;
};

export type TimelinesItem = {
  id: number;
  name: string;
  image: string;
  timelines: TimelineEntry[];
};
