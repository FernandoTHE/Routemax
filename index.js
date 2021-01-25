import {GooglePlacesAutocomplete} from '@react-navigation/native';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyC4Jq2Bkuf0c4BfSfZ5tAiNhLdSNYXaPUQ',
        language: 'en',
      }}
      currentLocation={true}
      currentLocationLabel="Current location"
    />
  );
};

export default GooglePlacesInput;
