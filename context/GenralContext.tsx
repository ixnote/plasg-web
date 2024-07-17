import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const GeneralContext = createContext({});

const GeneralProvider = (props: any) => {
  // Misc
  const [name, setName] = useState<String>("Ministries");

  // Tags
  const [typeTags, setTypeTags] = useState([]);
  const [typeTagId, setTypeTagId] = useState("");
  const [tagTopicName, setTagTopicName] = useState("");
  const [topicTagData, setTopicTagData] = useState();
  const [topicTagId, setTopicTagId] = useState("");
  const [topicSubTagId, setTopicSubTagId] = useState("");

  // Resources
  const [resources, setResources] = useState([]);
  const [homeResources, setHomeResources] = useState([]);
  const [loadingResource, setLoadingResource] = useState(false);

  // Static
  const [legislatives, setLegislatives] = useState([]);

  //*******/
  //************/
  // TAGS
  //************/
  //*******/
  const allTypeTags = async () => {
    try {
      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tag/types`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      setLoadingResource(false);
      // console.log("🚀 ~ allTypeTags ~ response:", response.data.data);
      return setTypeTags(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ allResources ~ error:", error.message);
    }
  };

  const getTopicTags = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tag/topics`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // Set a timeout of 10 seconds
        }
      );
      // console.log("🚀 ~ getTopicTags ~ response:", response.data.data);
      return setTopicTagData(response.data.data);
    } catch (error: any) {
      console.log("🚀 ~ allResources ~ error:", error.message);
      // throw new Error(error.message);
    }
  };

  //*******/
  //************/
  // RESOURCES
  //************/
  //*******/
  const allResources = async () => {
    try {
      console.log("🚀 ~ allResources ~ topicTagId:", topicTagId);
      console.log("🚀 ~ GeneralProvider ~ typeTagId:", typeTagId);
      // console.log("🚀 ~ GeneralProvider ~ resources:", resources);

      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resource/all?page=1&pageSize=10&${
          topicTagId &&
          `main_topic_tag=${topicTagId}&${
            topicSubTagId && `all_topic_tag=${topicSubTagId}`
          }&${typeTagId && `main_type_tag=${typeTagId}`}`
        }`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      console.log("🚀 ~ allResources ~ response:", response.data.data);
      setLoadingResource(false);
      return setResources(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ allResources ~ error:", error.message);
    }
  };

  const getHomeResources = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resource/all?page=1&pageSize=10&`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log("🚀 ~ getHomeResources ~ response:", response.data.data);
      const firstFourResources = response.data.data.resources.slice(0, 4);
      return setHomeResources(firstFourResources);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ getHomeResources ~ error:", error.message);
    }
  };

  const getResourceByType = async () => {
    // Resource, Document, Service
    try {
      // console.log("🚀 ~ GeneralProvider ~ typeTagId Fetch: ", typeTagId);
      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resource/all?page=1&pageSize=10&main_type_tag=${typeTagId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log("🚀 ~ getResourceByType ~ response:", response.data.data);
      setLoadingResource(false);
      return setResources(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ getResourceByType ~ error:", error.message);
    }
  };

  const getResourceByTagTopicName = async (name: any) => {
    console.log("🚀 ~ getResourceByTagTopicName ~ name:", name);
    // Governance, Business, Health, Welfare, Tourism
    try {
      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resource/category/${name}?page=1&pageSize=1`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log(
      //   "🚀 ~ getResourceByTagTopicName ~ response:",
      //   response.data.data
      // );
      setLoadingResource(false);
      return setResources(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ getResourceByTagTopicName ~ error:", error.message);
    }
  };

  //*******/
  //************/
  // STATIC
  //************/
  //*******/
  const allLegislatives = async () => {
    try {
      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/statics/legislatives?page=1&pageSize=10`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log("🚀 ~ allLegislatives ~ response:", response.data.data);
      // setLoadingResource(false);
      return setLegislatives(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ allLegislatives ~ error:", error.message);
    }
  };

  useEffect(() => {
    console.log("Context Tag Switch.");

    if (typeTagId) allResources();
  }, [typeTagId]);

  useEffect(() => {
    if (tagTopicName) getResourceByTagTopicName(tagTopicName);
  }, [tagTopicName]);

  //*******/
  //************/
  // fetch everything on startup
  //************/
  //*******/

  useEffect(() => {
    console.log("Fetch everything");
    allTypeTags();
    getTopicTags();
    getHomeResources();
    allLegislatives();
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        // Misc
        name,
        loadingResource,
        setName,
        setLoadingResource,

        // Tags
        typeTags,
        topicTagId,
        typeTagId,
        tagTopicName,
        topicTagData,
        topicSubTagId,
        allTypeTags,
        setTypeTags,
        getTopicTags,
        setTopicTagId,
        setTypeTagId,
        setTagTopicName,
        setTopicTagData,
        setTopicSubTagId,

        // Resources
        resources,
        homeResources,
        allResources,
        setResources,
        getResourceByType,
        getResourceByTagTopicName,

        // Static
        legislatives,
        allLegislatives,
        setLegislatives,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  return context;
};

export default GeneralProvider;
