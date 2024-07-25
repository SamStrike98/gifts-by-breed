import Container from "@/components/Container"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="md:pt-0 pt-[100px] min-h-[calc(80vh)]">
            <Container>
                <div className="flex flex-row justify-center font-bold text-4xl mt-3">
                    Loading...
                </div>
            </Container>
        </div>
    )
}