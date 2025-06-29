

const TotalSection = () => {

    

    return (
        <div className="flex flex-col gap-4">
            <div>
                <p>Subtotal</p>
                <p>Tax rate</p>
                <p>Tax</p>
                <p>Total</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <p className="font-semibold">$0.00</p>
                <p className="font-semibold">0%</p>
                <p className="font-semibold">$0.00</p>
                <p className="font-semibold">$0.00</p>
            </div>

        </div>
    );
}