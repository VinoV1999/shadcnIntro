'use client'
import React, { useEffect, useState } from 'react'
import { dummyList } from '../../constants/store'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

type products = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const Products = () => {
    const [products, setProducts] = useState<products[] | null>(null);

    useEffect(()=> {
        setTimeout(() => {
            setProducts(dummyList);
        }, 2000);
    },[])

    const INR = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });

  return (
    <div className="grid grid-cols-3 gap-8">
        {products && products.map(item => <Card key={item.id} className='flex flex-col justify-between'>
            <CardHeader className="flex-row gap-4 items-center">
              <div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>Rating : {item.rating} / 5</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button>Read more</button>
              <p>{INR.format(item.price)}</p>
            </CardFooter>
        </Card>)}
    </div>
  )
}

export default Products