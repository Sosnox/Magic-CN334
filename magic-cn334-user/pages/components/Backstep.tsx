import { Button } from "@nextui-org/button";
import { useRouter } from "next/router";

export const Backstep = () => {
    const router = useRouter();

    const goBack = () => {
      router.back(); // Will take you to the previous page in the session history
    };

    return (
        <div className="absolute flex flex-col items-center gap-4 left-10">
            <Button className="text-white"
                variant="light"
                onClick={goBack}>
                {`< Back`}
            </Button>
        </div>
    )
}