import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Text, Viev, FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import Loading from '../components/LoadingComponent';

const DirectoryScreen = ({navigation}) => {
    const campsites = useSelector((state) => state.campsites);

    if (campsites.isLoading) {
        return <Loading />;
    }

    if (campsites.errMess) {
        return (
            <View>
                <Text>{campsites.errMess}</Text>
            </View>
        );
    }
    
    const renderDirectoryItem = ({item : campsite}) => {
        return(
            <Tile
                title={campsite.name}
                caption={campsite.description}
                featured
                onPress={() =>
                    navigation.navigate('CampsiteInfo', { campsite })
                }
                imageSrc={{ uri: baseUrl + campsite.image }}
                containerStyle={{ marginBottom: 2 }}
            />
        )
    }
    return <FlatList
        data={campsites.campsitesArray}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
    />
}

export default DirectoryScreen;