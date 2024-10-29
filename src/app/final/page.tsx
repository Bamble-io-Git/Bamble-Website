'use client';
import React, { useEffect, useState } from 'react';
import posthog from 'posthog-js';
import FinalPageWithStripe from '@/components/modules/with-payment';
import FinalPageWithoutPayment from '@/components/modules/without-payment';
import useHeaderTitle from '@/hooks/useHeaderTitle';

const Final = () => {
  const [showFeatureFlag, setShowFeatureFlag] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development')
      posthog.onFeatureFlags(function () {
        if (posthog.isFeatureEnabled('payment-feature')) {
          setShowFeatureFlag(true);
        }
      });
  }, []);

  useHeaderTitle('STEP4-Documents');

  const showPayment =
    showFeatureFlag && posthog.isFeatureEnabled('payment-feature');
  console.log('showPayment', showPayment);
  return (
    <>{showPayment ? <FinalPageWithStripe /> : <FinalPageWithoutPayment />}</>
  );
};

export default Final;
