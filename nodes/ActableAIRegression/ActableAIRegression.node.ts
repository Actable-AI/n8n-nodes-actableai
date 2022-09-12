import { IExecuteFunctions } from "n8n-core";

import {
  IDataObject,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";

import { OptionsWithUri } from "request";

export class ActableAIRegression implements INodeType {
  description: INodeTypeDescription = {
    // Basic node details will go here
    displayName: "ActableAIRegression",
    name: "actableAIRegression",
    icon: "file:actableAIRegression.svg",
    group: ["transform"],
    version: [1, 0, 0],
    description: "Performs Actable AI Regression service",
    defaults: {
      name: "ActableAIRegression",
    },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [
      {
        name: "actableAIAPI",
        required: true,
      },
    ],
    properties: [
      // Resources and operations will go here
    ],
  };
  // The execute method will go here
  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {}
}
