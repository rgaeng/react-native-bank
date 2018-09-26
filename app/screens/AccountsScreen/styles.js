import { StyleSheet } from 'react-native';

const graphsSize = 100;
const colors = {
  dark: '#aaa',
  light: '#fff',
};
const styles = StyleSheet.create({
  gray: {
    color: colors.dark,
  },
  lightGray: {
    color: colors.light,
  },
  small: {
    fontSize: 10,
  },
  large: {
    fontSize: 22,
  },
  centered: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vertical: {
    flexDirection: 'column',
  },
  centerChildren: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  alignTopLeft: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
  },
  buttonGroup: {
    height: 35,
    marginTop: 30,
    marginBottom: 30,
  },
  spaceRight: {
    marginRight: 5,
  },
  spaceAround: {
    marginBottom: 5,
  },
  graphsWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: graphsSize,
    padding: 0,
    borderRadius: 3,
    overflow: 'hidden',
  },
  graphsPercentage: {
    position: 'absolute',
    width: graphsSize,
    height: graphsSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphsPercentageText: {
    fontSize: 12,
  },
  graphsSection: {
    flex: 1,
    maxWidth: graphsSize,
    minWidth: graphsSize,
    width: graphsSize,
    height: graphsSize,
    backgroundColor: '#888',
    position: 'relative',
  },
  graphsText: {
    flex: 1,
    padding: 10,
    paddingLeft: 25,
  },
});

export default styles;
