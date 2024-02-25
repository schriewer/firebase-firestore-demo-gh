'use server';

// A 

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

type Group = {
    name: string;
    binding: string;
    justification: string;

}

type UAC =  {
    groups: Group[]; // Change the type to allow multiple elements
}

let dummyDb: UAC = {
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

export async function addGroupToDummyDB(group: { name: string, binding: string, justification: string }) {
    console.log("addGroupToDummyDB called");
    console.log("group:", group);
    console.log("dummyDb:", dummyDb);

    dummyDb.groups.push(group);
}