// Daniel Vestergaard

import {
  ActivityIndicator,
  Text,
  ViewPropTypes,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import React, { useState } from 'react';

import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

export default function Feed(props) {
  propTypes = {
    style: ViewPropTypes.style,
    commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
      .isRequired,
    onPressComments: PropTypes.func.isRequired,

  };

  defaultProps = {
    style: null,
  };

  const { commentsForItem, onPressComments, style } = props;
  const [loading, setLoading] = useState(Boolean);
  const [error, setError] = useState(Boolean);
  const [items, setItems] = useState([]);

  useEffect(() => {

    async function fetchData() {
    try {
      const items = await fetchImages();

        setLoading(false);
        setItems(items);
        
    } catch (e) {
  
        setLoading(false);
        setError(true);
    }
  }
  fetchData();
  });


    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>Error...</Text>;
    }

    return (
      <SafeAreaView style={style}>
        <CardList
            items={items}
            commentsForItem={commentsForItem}
            onPressComments={onPressComments}
            />
      </SafeAreaView>
    );
}
