import { Text, View, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';

const RenderCampsite = (props) => {
    const { campsite } = props;
    console.log(props.isFavorite);
    if (campsite) {
        return (
            <Card containerStyle={styles.cardContainer}>
                <Card.Image 
                    source={{ uri: baseUrl + campsite.image }} 
                >
                <View style={{ justifyContent: 'center', flex: 1, margin: 10 }}>
                    <Text
                        style={{
                            color: 'black',
                            textAlign: 'center',
                            fontSize: 20
                        }}
                    >
                        {campsite.name}
                    </Text>
                </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{campsite.description}</Text>
                <Icon name={props.isFavorite ? 'heart' : 'heart-o'} 
                type='font-awesome' 
                color='#f50'
                raiset reverse
                onPress={() => props.markFavorite()}/>
            </Card>
        )
    }

    return <View />;
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    }
});

export default RenderCampsite;