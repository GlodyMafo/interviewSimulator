"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "/@/components/ui/dialog";



function NewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          
          <div
            className="px-10 py-5 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
            onClick={() => setOpenDialog(true)}
          >
            <h2 className="font-bold text-lg text-center">+ Ajouter</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          {/* <div className="flex-inline mx-[250px] border p-10 text-center">
          <h1>Salut</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
             Possimus fuga dicta ex quaerat? Cum eum a harum temporibus. Labore voluptates inventore assumenda reprehenderit facilis, laborum in vel dolorem mollitia delectus!</p>

             <div className="flex justify-between px-[280px] mt-5">
              <button className="px-10 py-2 border rounded-lg " onClick={()=>console.log('salut')}>Annuler</button>
              <button className="px-6 py-2 border rounded-lg bg-blue-500 text-white ">Commencer</button>
             
             </div>
          </div> */}

          
          
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NewInterview;
