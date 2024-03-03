//import { createUACForDummyDB } from '@/db';


// internalCSP = The first array element denotes the main internal Cloud Service Provider, where this application resides. Very most application will have only one CSP, where the application resides.
// The other array elements describe other internal Cloud Service Providers, where the application interacts with. An application may interact with multiple CSPs.
// externalCSP = External Cloud Service Providers, where the application interacts with. Typically, this will be an external SaaS service. An application may interact with multiple CSPs.

type CSP = {
    internalCSP: string[];
    externalCSP: string[];
}

type Principal = {
    member: string;
    principalType: string;
}


type Design = {
    designTypeDoc: string;
    designDocReference: string
} 

type ArchitectArtifacts = {
    sdd: string;
    version: string;
    versionStatus: string;
    designs: Design[];
}

export type Group = {
    name: string;
    binding: string;
    justification: string;

}

type Project = {
    projectNumber: string;
    projectName: string;
}

type application = {
    eim: string;
    projects: Project[];
}

export type UACHeader = {
    eim: string;
    description: string;
}

type UAC =  {

    groups: Group[]; // Change the type to allow multiple elements
}

export let dummyDb: UAC = {

    groups: [
        {name: "Group 1", binding: "Binding 1", justification: "Justification 1"},
        {name: "Group 2", binding: "Binding 2", justification: "Justification 2"},
    ]
}

export async function getGroups(): Promise<Group[]> {
    console.log("getGroups called");
    return dummyDb.groups;
}

export async function createGroupForDummyDB(group: { name: string, binding: string, justification: string }) {
    console.log("createGroupForDummyDB called");
    console.log("payload:", group);
    console.log("dummyDb:", dummyDb);
    dummyDb.groups.push(group);
    console.log("dummyDb after change:", dummyDb);
}

export async function createNewUACForDummyDB(uacHeader: UACHeader) {
    
}


export async function addGroupToDummyDB(group: { name: string, binding: string, justification: string }) {
    console.log("addGroupToDummyDB called");
    console.log("group:", group);
    console.log("dummyDb:", dummyDb);

    dummyDb.groups.push(group);
}