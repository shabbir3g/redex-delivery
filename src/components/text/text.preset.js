import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

const BASE = {
    fontFamily: typography.TextSecondary,
    fontSize: spacing[4],
    color: colors.lightPurple
}

const BOLD = {
    fontFamily: typography.TextPrimary,
    color: colors.darkPurple
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: spacing[9]
    },
    h2: {
        ...BOLD,
        fontSize: spacing[8]
    },
    h3: {
        ...BOLD,
        fontSize: spacing[7]
    },

}