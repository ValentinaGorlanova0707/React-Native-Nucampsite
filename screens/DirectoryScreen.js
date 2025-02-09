import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { CAMPSITES } from '../shared/campsites';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';

const DirectoryScreen = ({navigation}) => {
    const campsites = useSelector((state) => state.campsites);

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