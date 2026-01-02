import { RouteProp, useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../../navigation/type';
import { Colors } from '../../theme/Colors';
import AppButton from '../../components/AppButton';
import { useCart } from '../../context/CartContext';
import { useFav } from '../../context/FavContext';
import { Back } from '../../assets/svg/Index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

const { height, width } = Dimensions.get('window');

const ProductDetails = ({ route }: { route: ProductDetailsRouteProp }) => {
  const { Product } = route.params;
  const navigation = useNavigation();
  const { addToCart } = useCart();
  const { addToFav } = useFav();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: insets.top,
        },
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.whiteFF}
        translucent
      />
      {/* Image Section */}
      <View style={styles.imageWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <Image source={require('../../assets/images/Vector.png')} /> */}
            <Back height={20} width={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/Vector-Send.png')} />
          </TouchableOpacity>
        </View>

        <Image source={Product.image} style={styles.productImage} />
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Title */}
        <View style={styles.titleRow}>
          <Text style={styles.titleText}>{Product.name}</Text>
          <TouchableOpacity onPress={() => addToFav(Product)}>
            <Image source={require('../../assets/images/Vector-Like.png')} />
          </TouchableOpacity>
        </View>

        {/* Quantity & Price */}
        <View style={styles.quantityRow}>
          <View style={styles.qtyBox}>
            <TouchableOpacity>
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyNumber}>1</Text>

            <TouchableOpacity>
              <Text style={styles.qtyPlus}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.priceText}> ${Product.price}</Text>
        </View>

        <View style={styles.divider} />

        {/* Product Detail */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Product Detail</Text>
          <Image source={require('../../assets/images/Vector-Down.png')} />
        </View>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quo nemo maiores, ex minima porro, nam ratione dignissimos provident
          accusantium, iure corrupti. Harum, sit in
        </Text>

        <View style={styles.divider} />

        {/* Nutrition */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Nutritions</Text>
          <Image source={require('../../assets/images/Vector-Right.png')} />
        </View>

        <View style={styles.divider} />

        {/* Review */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Review</Text>
          <View style={styles.reviewRow}>
            <Image source={require('../../assets/images/Rating.png')} />
            <Image source={require('../../assets/images/Vector-Right.png')} />
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <AppButton title="Add To Basket" onPress={() => addToCart(Product)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageWrapper: {
    height: height * 0.5,
    elevation: 2,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },

  productImage: {
    height: height * 0.5,
    width: width,
    resizeMode: 'contain',
  },

  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.whiteFF,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
  },

  titleText: {
    fontSize: 20,
    fontWeight: '500',
  },

  quantityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  qtyBox: {
    flexDirection: 'row',
    gap: 20,
  },

  qtyText: {
    fontSize: 30,
  },

  qtyNumber: {
    fontSize: 20,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    textAlign: 'center',
    paddingVertical: 10,
  },

  qtyPlus: {
    fontSize: 30,
    color: Colors.green75,
  },

  priceText: {
    fontSize: 20,
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E2E2',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },

  sectionTitle: {
    fontWeight: '500',
  },

  description: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  reviewRow: {
    flexDirection: 'row',
    gap: 20,
  },

  buttonWrapper: {
    padding: 10,
  },
});
