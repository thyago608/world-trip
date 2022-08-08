import Lottie from "react-lottie";
import { Flex } from "@chakra-ui/react";
import animation from "../../public/animation/animation.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

interface AirplaneAnimationProps {
    invert?: boolean;
};

export function AirplaneAnimation({ invert = false }: AirplaneAnimationProps) {
    return (
        <Flex
            w="100%"
            h="100vh"
            justify="center"
            align="center"
            position="absolute"
            top="30%"
            zIndex={5}
            transform={invert ? 'scaleX(-1)' : 'none'}
        >
            <Lottie
                options={defaultOptions}
                height={150}
                width={200}
            />
        </Flex>
    );
}