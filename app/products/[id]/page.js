import Container from '@/components/Container'
import AddToCartBtn from '@/components/singleProduct/AddToCartBtn'
import ProductDescription from '@/components/singleProduct/ProductDescription'
import ProductsImages from '@/components/singleProduct/ProductsImages'
import ProductDetails from '@/components/singleProduct/ProductDetails'
import React from 'react'
import FeaturedProducts from '@/sections/FeaturedProducts'
import SimilarProducts from '@/sections/SimilarProducts'

const product = {
    id: 1,
    title: "Dachshund Bookmark",
    price: 2.50,
    description: "Introducing our charming Dachshund Bookmark, the perfect gift for dog lovers and bookworms alike! This delightful bookmark features an adorable Dachshund design, capturing the playful and loyal spirit of this beloved breed. Crafted with meticulous attention to detail, our Dachshund Bookmark is made from high-quality materials ensuring durability and a stylish look. Whether you're marking your place in a gripping novel or your favorite cookbook, this bookmark adds a touch of canine charm to your reading experience. Celebrate your love for Dachshunds with this unique and functional accessory, ideal for gifting to friends, family, or even yourself!"
}

const page = ({ params }) => {
    const id = params.id
    return (
        <div className='pt-[100px] md:pt-0'>
            <Container>
                <div className='flex flex-col-reverse items-center md:items-start md:flex-row md:justify-center my-5'>
                    <div className='w-[80%] md:w-1/3 flex flex-col items-center'>
                        <ProductDetails title={product.title} price={product.price} />
                        <AddToCartBtn />
                        <ProductDescription description={product.description} />
                    </div>

                    <div className='w-[80%] md:w-1/3 flex flex-col items-center'>
                        <ProductsImages />
                    </div>
                </div>


            </Container>
            <SimilarProducts />

        </div>
    )
}

export default page