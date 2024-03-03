// This is the overall landing page for the application. It is the first page that the user sees when they visit the application. It is also the page that the user is redirected to when they click on the application's logo. The page is a simple form that allows the user to create a new group. The form has three fields: name, binding, and justification. The user can input the name of the group, the binding of the group, and the justification for the group. When the user clicks on the "Create" button, the form data is sent to the server. The server then creates a new record in the database with the form data. The user is then redirected to the new group's page. The user can then see the new group that they have created. The user can also see the group's name, binding, and justification. The user can also see the group's members and the group's posts. The user can also see the group's settings and the group's activity. The user can also see the group's notifications and the group's messages. The user can also see the group's files and the group's links. The user can also see the group's calendar and the group's tasks. The user can also see the group's polls and the group's surveys. The user can also see the group's events and the group's meetings. The user can also see the group's photos and the group's videos. The user can also see the group's albums and the group's playlists. The user can also see the group's documents and the group's spreadsheets. The user can also see the group's presentations and the group's forms. The user can also see the group's databases and the group's tables. The user can also see the group's records and the group's fields. The user can also see the group's reports and the group's charts. The user can also see the group's graphs and the group's diagrams. The user can also see the group's maps and the group's locations. The user can also see the group's addresses and the group's phone numbers. The user can also see the group's emails and the group's websites. The user can also see the group's social media and the group's profiles. The user can also see the group's accounts and the group's subscriptions. The user can also see the group's payments and the group's invoices. The user can also see the group's receipts and the group's orders.


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
