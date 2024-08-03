"use client";
import { Avatar } from "@/colidy-ui/Avatar";

export const Demo = () => {
    return (
        <div className="flex gap-4 items-center">
            <Avatar
                src="https://i.pravatar.cc/300?u=a042581f4e29026705a"
                alt="Jane Doe"
            />
            <Avatar
                src="https://i.pravatar.cc/300?u=a042581f4e29026705b"
                alt="Jane Doe"
                size={"lg"}
            />
            <Avatar
                src="https://i.pravatar.cc/300?u=a042581f4e29026705c"
                alt="Jane Doe"
                size={"xl"}
            />
            <Avatar src="/broken.png" alt="Jane Doe" size={"2xl"} />
        </div>
    );
};

// @end-example
export default {
    props: null,
    examples: null,
};


// @start-demo-string
export const DemoString = `"use client";
import { Avatar } from "@/colidy-ui/Avatar";

export const Demo = () => {
    return (
        <div className="flex gap-4 items-center">
            <Avatar
                src="https://i.pravatar.cc/300?u=a042581f4e29026705a"
                alt="Jane Doe"
            />
            <Avatar
                src="https://i.pravatar.cc/300?u=a042581f4e29026705b"
                alt="Jane Doe"
                size={"lg"}
            />
            <Avatar
                src="https://i.pravatar.cc/300?u=a042581f4e29026705c"
                alt="Jane Doe"
                size={"xl"}
            />
            <Avatar src="/broken.png" alt="Jane Doe" size={"2xl"} />
        </div>
    );
};

`;