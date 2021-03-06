import React from 'react'
import { ViewStyle } from 'react-native'
import styled from 'styled-components/native'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'
import { perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'

type LanguageTagProps = {
  language: string
} & ViewStyle

const LanguageTag: React.FC<LanguageTagProps> = ({ language, ...props }) => (
  <Container style={{ ...props }}>
    <Typography text={language.toUpperCase()} color={colors.white} size={14} />
  </Container>
)
export default LanguageTag

const Container = styled.View`
  width: ${perfectWidth(28)}px;
  height: ${perfectHeight(28)}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.steelGray};
  border-radius: ${perfectWidth(8)}px;
`
