import React from 'react';
import * as Label from '@radix-ui/react-label';
import { Flex, Text, Button, TextArea, Container } from '@radix-ui/themes';
import { ContainerIcon } from '@radix-ui/react-icons';
import { createNewUACForDummyDB, UACHeader } from '@/db';


export default function UACCreatePage() {
    async function createUAC(formData: FormData) {
        'use server';

        const eim = formData.get('eim') as string;
        const description = formData.get('description') as string;

        const uacHeader:UACHeader = { eim: eim, description: description};
        console.log("UAC Header:", uacHeader);


        await createNewUACForDummyDB(uacHeader);
    }

    return (
        <Container size="4" className='mx-auto px-12'>
        <form action={createUAC}>
                <h2 className="font-bold m-3">UACCreatePage - Create a UAC!</h2>
                <div className="flex flex-col gap-4 my-8">
                        <div className="flex gap-4 items-center">
                                <Label.Root className="text-lg w-32" htmlFor="eim">EIM</Label.Root>
                                <input type="text" name="eim" id="eim" className="p-2 rounded-md w-full" placeholder="Enter EIM" />
                        </div>

                </div>
                
                <div className="flex flex-col gap-4 my-8">
                        <div className="flex gap-4 items-center">
                                <Label.Root className="text-lg w-32" htmlFor="description">Description: </Label.Root>
                                <textarea name="description" id="description" className="p-2 rounded-md w-full" placeholder="Enter a description of this application/service" />

                        </div>

                </div>

                <Button type="submit">Create</Button>

        </form>
        </Container>
    );
}