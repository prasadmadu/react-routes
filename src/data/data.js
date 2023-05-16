export const brandOptions = [
  { id: 'lg', name: 'LG', logo: '/path/to/lg-logo.png', link: 'brand/lg' },
  { id: 'whirlpool', name: 'Whirlpool', logo: '/path/to/whirlpool-logo.png', link: 'brand/whirlpool' },
  { id: 'apple', name: 'Apple', logo: '/path/to/apple-logo.png', link: 'brand/apple' },
  { id: 'samsung', name: 'Samsung', logo: '/path/to/samsung-logo.png', link: 'brand/samsung' },
  { id: 'sony', name: 'Sony', logo: '/path/to/sony-logo.png', link: 'brand/sony' },
  { id: 'dell', name: 'Dell', logo: '/path/to/dell-logo.png', link: 'brand/dell' },
  { id: 'nike', name: 'Nike', logo: '/path/to/nike-logo.png', link: 'brand/nike' },
  { id: 'cocacola', name: 'Coca-Cola', logo: '/path/to/cocacola-logo.png', link: 'brand/cocacola' },
  { id: 'bmw', name: 'BMW', logo: '/path/to/bmw-logo.png', link: 'brand/bmw' }
];

export const categoryOptions = [
  { id: 'electronics', name: 'Electronics', icon: '/path/to/electronics-icon.png', link: 'category/electronics' },
  { id: 'appliances', name: 'Appliances', icon: '/path/to/appliances-icon.png', link: 'category/appliances' },
  { id: 'fashion', name: 'Fashion', icon: '/path/to/fashion-icon.png', link: 'category/fashion' },
  { id: 'home', name: 'Home', icon: '/path/to/home-icon.png', link: 'category/home' },
  { id: 'sports', name: 'Sports', icon: '/path/to/sports-icon.png', link: 'category/sports' },
  { id: 'beauty', name: 'Beauty', icon: '/path/to/beauty-icon.png', link: 'category/beauty' }
];

export const productDetails = Array.from({ length: 100 }, (_, index) => ({
  id: `product${index + 1}`,
  name: `Product ${index + 1}`,
  brand: brandOptions[Math.floor(Math.random() * brandOptions.length)],
  category: categoryOptions[Math.floor(Math.random() * categoryOptions.length)],
  price: Math.floor(Math.random() * 1000) + 1,
  image: `https://picsum.photos/300/200?random=${index + 1}`
}));