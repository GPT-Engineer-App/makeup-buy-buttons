// Complete the Index page component for a Shopify-like store for makeup products
import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Lipstick",
    description: "Rich color with a smooth finish",
    price: "$20",
    imageUrl: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaXBzdGlja3xlbnwwfHx8fDE3MTQ0MDUxMjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Eyeshadow Palette",
    description: "Vibrant colors for every look",
    price: "$35",
    imageUrl: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleWVzaGFkb3clMjBwYWxldHRlfGVufDB8fHx8MTcxNDQwNTEyM3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Foundation",
    description: "Smooth and blendable with a natural finish",
    price: "$25",
    imageUrl: "https://images.unsplash.com/photo-1557205465-f3762edea6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3VuZGF0aW9uJTIwbWFrZXVwfGVufDB8fHx8MTcxNDQwNTEyM3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Makeup Store</Heading>
      <Flex wrap="wrap" justifyContent="center">
        {products.map((product) => (
          <VStack key={product.id} p={4} m={2} borderWidth="1px" borderRadius="lg" width="sm">
            <Image src={product.imageUrl} boxSize="200px" objectFit="cover" alt={product.name} />
            <Text fontWeight="bold" fontSize="xl">
              {product.name}
            </Text>
            <Text>{product.description}</Text>
            <Text fontSize="lg" color="green.500">
              {product.price}
            </Text>
            <Button rightIcon={<FaShoppingCart />} colorScheme="pink">
              Buy Now
            </Button>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default Index;
