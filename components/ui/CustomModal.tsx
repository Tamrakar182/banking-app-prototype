import { View } from 'react-native';
import React, { forwardRef, ReactNode, useMemo } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export type Ref = BottomSheetModal;

interface Props {
    children: ReactNode;
    snapPoint?: string;
}

const CustomBottomSheetModal = forwardRef<Ref, Props>((props, ref) => {
    const { children, snapPoint = '90%' } = props;

    const snapPoints = useMemo(() => [snapPoint], [snapPoint]);

    return (
        <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
            <View className="flex-1 items-center">
                {children}
            </View>
        </BottomSheetModal>
    );
});

export default CustomBottomSheetModal;