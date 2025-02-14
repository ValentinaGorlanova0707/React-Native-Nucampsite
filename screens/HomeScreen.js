import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Loading from '../components/LoadingComponent';

const FeaturedItem = (props) => {
    if (props.isLoading) {
        return <Loading />;
    }

    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }

    if (props.item) {
        return (
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={{ uri: baseUrl + props.item.image }}>
                    <View style={{justifyContent: 'center', flex: 1}}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>{props.item.name}</Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{props.item.description}</Text>
            </Card>
        )
    }
    return <View />;
}

const HomeScreen = () => {
    const campsites = useSelector((state) => state.campsites);
    const promotions = useSelector((state) => state.promotions);
    const partners = useSelector((state) => state.partners);

    const featCampsite = campsites.campsitesArray.find((item) => item.featured);
    const featPromotion = promotions.promotionsArray.find(
        (item) => item.featured
    );
    const featPartner = partners.partnersArray.find((item) => item.featured);

    return(
        <ScrollView>
            <FeaturedItem 
                item={featCampsite} 
                isLoading={campsites.isLoading}
                errMess={campsites.errMess} 
                    />
            <FeaturedItem 
                item={featPromotion} 
                isLoading={campsites.isLoading}
                errMess={campsites.errMess} 
                    />
            <FeaturedItem 
                item={featPartner} 
                isLoading={campsites.isLoading}
                errMess={campsites.errMess} 
                    />
        </ScrollView>
    )
}

export default HomeScreen;