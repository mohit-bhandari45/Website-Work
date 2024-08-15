import React, { useState } from 'react';
import { Copy } from "lucide-react";
import { Button } from "../../../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { useNavigate } from 'react-router-dom';
import Lock from "./Vector.png"

const FeatureCard = ({ id, title, image, isLocked, path }) => {
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const handleClick = () => {
        if (!isLocked) {
            navigate(path)
        }
    }

    const handleChange = (e) => {
        const newValue = e.target.value;
        setName(newValue);
        if (newValue === "Sambhit") {
            navigate("/dashboard")
        }
    }

    return (
        <Dialog>
            <div className="relative w-full h-60 rounded-lg overflow-hidden">
                {id ? (
                    <DialogTrigger asChild>
                        <button>
                            <img src={image} alt={title} className="w-full h-full object-cover" />
                            {isLocked && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <img src={Lock} alt="" />
                                </div>
                            )}
                        </button>
                    </DialogTrigger>
                ) : (
                    <button onClick={handleClick}>
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                        {isLocked && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <img src={Lock} alt="" />
                            </div>
                        )}
                    </button>
                )}
            </div>
            {id && (
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Share link</DialogTitle>
                        <DialogDescription>
                            Anyone who has this link will be able to view this.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2 text-black">
                            <Label htmlFor="link" className="sr-only">
                                Link
                            </Label>
                            <Input
                                id="link"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={handleChange}
                            />
                        </div>
                        <Button type="submit" size="sm" className="px-3">
                            <span className="sr-only">Copy</span>
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            )}
        </Dialog>
    );
};

export default FeatureCard;
