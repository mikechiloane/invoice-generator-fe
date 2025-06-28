import LogoComponent from "../logo";

const HeaderComponent = () => {
    return (
        <div className="flex  w-full py-4 items-center justify-between  text-white">
            <LogoComponent />
        </div>
    );
}


export { HeaderComponent as Header };