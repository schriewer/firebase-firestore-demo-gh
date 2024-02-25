import React from 'react';
import { createGroupForDummyDB } from '@/db';
import { editGroup } from '@/actions';

interface Group {
  name: string;
  binding: string;
  justification: string;
}
export default function Home() {

  async function setupGroup(formData: FormData) {
    // This needs to be a server action
    'use server';
  

    // Check the user's input
    const name = formData.get('name') as string;
    const binding = formData.get('binding') as string;
    const justification = formData.get('justification') as string;

    const group = { name: name, binding: binding, justification:justification };
    console.log("group:", group);

    // Create a new record in the database
    createGroupForDummyDB(formData);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        Edit group
      </div>
      <form action={createGroupForDummyDB}>
        <h3 className="items-center justify-center">Create a group</h3>
        <div className="container p-2 mx-auto border-2 rounded flex flex-col gap-4">
          
          <div className="flex gap-4 border-3">
            <label className="w-32" htmlFor="name">Group caption</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="flex gap-4">
            <label className="w-32" htmlFor="binding">Binding</label>
            <input type="text" name="binding" id="binding" />
          </div>
          <div className="flex gap-4">
            <label className="w-32" htmlFor="justification">Justification</label>
            <textarea name="justification" id="justification" />
          </div>

          <button className="bg-blue-500 text-white p-2 rounded-md">Create</button>
        </div>
      </form>

    </main>
  );
}
