import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const GeneralContext = createContext({});

const GeneralProvider = (props: any) => {
  const [name, setName] = useState<String>("Ministries");
  const [typeTags, setTypeTags] = useState([]);
  const [oneTypeTagId, setOneTypeTagId] = useState("");
  console.log("🚀 ~ GeneralProvider ~ oneTypeTagId base: ", oneTypeTagId);
  const [resources, setResources] = useState([]);
  const [loadingResource, setLoadingResource] = useState(false);

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

  //*******/
  //************/
  // RESOURCES
  //************/
  //*******/
  const allResources = async () => {
    try {
      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resource/all?page=1&pageSize=10`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      // console.log("🚀 ~ allResources ~ response:", response.data.data);
      setLoadingResource(false);
      return setResources(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ allResources ~ error:", error.message);
    }
  };

  const getResourceByType = async () => {
    // Resource, Document, Service
    try {
      console.log("🚀 ~ GeneralProvider ~ oneTypeTagId Fetch: ", oneTypeTagId);
      setLoadingResource(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resource/all?page=1&pageSize=10&main_type_tag=${oneTypeTagId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );
      console.log("🚀 ~ getResourceByType ~ response:", response.data.data);
      setLoadingResource(false);
      return setResources(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ allResources ~ error:", error.message);
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
      console.log(
        "🚀 ~ getResourceByTagTopicName ~ response:",
        response.data.data
      );
      setLoadingResource(false);
      return setResources(response.data.data);
    } catch (error: any) {
      setLoadingResource(false);
      console.log("🚀 ~ allResources ~ error:", error.message);
    }
  };

  useEffect(() => {
    getResourceByType();
  }, [oneTypeTagId]);

  //*******/
  //************/
  // fetch everything on startup
  //************/
  //*******/

  useEffect(() => {
    console.log("Fetch everything");
    allTypeTags();
    allResources();
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        name,
        typeTags,
        resources,
        oneTypeTagId,
        loadingResource,

        setName,
        allTypeTags,
        setTypeTags,
        allResources,
        setResources,
        setOneTypeTagId,
        getResourceByType,
        setLoadingResource,
        getResourceByTagTopicName,
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
