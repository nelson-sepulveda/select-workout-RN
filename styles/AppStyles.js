import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 50,
    marginHorizontal:25
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerProfileIcon: {
    flex: 0.2,
    backgroundColor: '#e4dddd',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 29
  },
  containerIconHeart: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTitle: {
    fontFamily: 'ZonaProBold',
    fontSize: 34,
    fontWeight: '500'
  },
  containerTitle: {
    marginTop: 15
  },
  containerListEmojis: {
    marginTop: 30
  },
  containerIconList: {
    backgroundColor: '#fafcfa',
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  separatorItem: {
    width: 20
  },
  itemSeparatorColumn: {
    marginVertical: 10
  },
  fontSizeImg: {
    fontSize:26
  },
  containerCards: {
    flex: 1,
    marginTop: 15
  },
  containerCard: {
    borderRadius: 20,
    height: 200
  },
  containerBodyCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    borderRadius: 40
  },
  containerSeccionIzq: {
    flexDirection: 'column',
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  containerSeccionDer: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%'
  },
  textTitleCard: {
    fontFamily: 'ZonaProBold',
    fontSize: 32,
    fontWeight: '600',
    color: '#0c0c0c'
  },
  containerHideTime: {
    height: 40,
    width: 110,
    backgroundColor: '#fff',
    marginTop: 20,
    marginStart: 10,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  containerImagen: {
    width: 180,
    height: 180,
    marginTop: 19,
    marginEnd: 10
  },
  textTime: {
    fontFamily: 'ZonaProBold',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 5
  },
  containerWithText: {
    fontFamily: 'ZonaProBold',
    fontWeight: '700',
    fontSize: 13,
    marginStart: 6
  },
  marginLeft5: {
    marginLeft: 5
  }
});


export default styles