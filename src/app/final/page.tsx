'use client';
import React, { useEffect, useState } from 'react';
import posthog from 'posthog-js';
import FinalPageWithStripe from '@/components/modules/with-payment';
import FinalPageWithoutPayment from '@/components/modules/without-payment';

const Final = () => {
  const [showFeatureFlag, setShowFeatureFlag] = useState(false);

  useEffect(() => {
    posthog.onFeatureFlags(function () {
      if (posthog.isFeatureEnabled('payment-feature')) {
        setShowFeatureFlag(true);
      }
    });
  }, []);

  const showPayment =
    showFeatureFlag && posthog.isFeatureEnabled('payment-feature');
  console.log('showPayment', showPayment);
  return (
    <>{showPayment ? <FinalPageWithStripe /> : <FinalPageWithoutPayment />}</>
  );
};

export default Final;
