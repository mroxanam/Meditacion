import { Image, View, Text, FlatList, Pressable } from "react-native";
import { GalleryPreviewData } from "../constants/models/AffirmationCategory";
import { Link } from "expo-router";

interface GuidedAffirmationsGalleryProps {
    title: string;
    products: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
    title,
    products,
}: GuidedAffirmationsGalleryProps) => {
    return (
        <View className="my-5">
            <View className="mb-2 px-4">
                <Text className="text-white font-bold text-xl">{title}</Text>
            </View>
            <View>
                <FlatList
                    data={products}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                    renderItem={({ item }) => (
                        <Link href={`/affirmations/${item.id}`} asChild>
                            <Pressable>
                                <View className="h-36 w-32 rounded-xl mr-4 overflow-hidden">
                                    <Image
                                        source={item.image}
                                        resizeMode="cover"
                                        className="w-full h-full"
                                    />
                                </View>
                            </Pressable>
                        </Link>
                    )}
                />
            </View>
        </View>
    );
};

export default GuidedAffirmationsGallery;