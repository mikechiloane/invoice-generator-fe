import Image from "next/image"


const LogoComponent = () => {
    return(
        <Image
            src="/logo.svg"
            alt="Recceda Logo"
            width={120}
            height={100}
            priority={true}
        />
    );

}

export default LogoComponent;