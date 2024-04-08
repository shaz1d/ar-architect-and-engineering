import { Project } from "./models";
import { connectToDb } from "./utils";

export const getProjects = async () => {
  try {
    connectToDb();
    const projects = await Project.find();
    return projects;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch projects");
  }
};
export const getProject = async (slug: string) => {
  try {
    connectToDb();
    const project = await Project.findOne({ slug });
    return project;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch project");
  }
};
