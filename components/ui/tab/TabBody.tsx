import { experiences } from "@/constants/experiences";
import TimeLine from "../TimeLine";
import { educations } from "@/constants/education";
import { tabTypes } from "@/types/type";

type propsTypes = {
  activeTab: tabTypes;
};

const TabBody = ({ activeTab }: propsTypes) => {
  if (activeTab == "work") {
    return <TimeLine datas={experiences} />;
  } else {
    return <TimeLine datas={educations} />;
  }
};

export default TabBody;
