import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { Heading, Stack, Text, Image, Center, Link, Button } from '@chakra-ui/react';
import { ReactComponent as FigureOne } from './assets/images/mysofa.svg';
import { ReactComponent as FigureTwo } from './assets/images/derivingpoints.svg';
import Figure from './components/Figure';
import {AttachmentIcon } from '@chakra-ui/icons';

export default function MovingSofa() {
    return (
        <Stack p="50px 10vw 0px 10vw" spacing={6} as="samp">
            <Heading>Extension of The Moving Sofa Problem</Heading>
            <Text>January 15, 2022</Text>
            <Button leftIcon={<AttachmentIcon />} colorScheme='teal' variant='solid' w="fit-content">Download PDF</Button>
            <Heading as="h2" size="lg">Preamble</Heading>
            <Text>This article is only a portion of the full paper I wrote. In the full paper, I not only derive the "longest sofa," but also the sofa of largest area for elliptical rotation paths and the formulas for the envelopes of each sofa.</Text>
            <Figure figure={<FigureOne />} num={1} caption={"Optimal sofa with an elliptical rotation path (blue) and Gerver's sofa (red)"} />
            <Text>Not everything in this essay is original. This essay is largely inspired by <Link color='teal.500' href="https://math.stackexchange.com/questions/1787466/modelling-the-moving-sofa">this StackExchange post</Link>. The "Hallway Summary," on top of many other things, found in section 1.3.1 for elliptical rotation paths was derived by <Link color='teal.500' href="https://math.stackexchange.com/users/255730/intelligenti-pauca">intelligenti-pauca</Link> on StackExchange but my attempt at deriving it is original as his work did not include any derivation. Additionally, intelligenti-pauca provided a potential longest sofa in his post which was ultimately what sparked my interest in trying to determine the longest sofa. However, the sofa I found is not the same as his and it appears that his sofa is slightly smaller than mine.</Text>
            <Heading as="h2" size="lg">Parameterizing the Hallway</Heading>
            <Text>For the purposes of this exploration, it will useful to parameterize the hallway. For simplicity, only elliptical and circular rotation paths will be considered, though it is pretty clear that the sofa of largest area does not follow an elliptical rotation path. However, the largest area of a sofa with an elliptical rotation path is quite close as it has an area of about 2.21786 compared to the 2.21953 of the <em>Gerver Sofa</em>. Below is my attempt at deriving the hallway's parameters I saw on the StackExchange post.</Text>

            <Heading as="h3" size="md">Coordinates of <InlineMath>A</InlineMath> and <InlineMath>A'</InlineMath> (refer to fig. 2)</Heading>
            <Figure figure={<FigureTwo />} num={2} caption={"Parameterizing the points on the hallway"} />
            <Text>
                Firstly, it is well-known that the parametric form of a circle is described by <InlineMath>{"(r\\cos\\alpha, r\\sin\\alpha)"}</InlineMath>, where <InlineMath>{"r"}</InlineMath> is the radius of the circle and <InlineMath>{"0\\leq \\alpha \\leq\\pi"}</InlineMath>.
                Since point <InlineMath>{"A"}</InlineMath> moves in a circular rotation path, then the coordinates of <InlineMath>{"A"}</InlineMath> are described by <InlineMath>{"(r\\cos\\alpha, r\\sin\\alpha)"}</InlineMath> for <InlineMath>{"0\\leq \\alpha\\leq \\pi"}</InlineMath>. From here, the coordinates of <InlineMath>{"A'"}</InlineMath> can be derived. Since <InlineMath>{"A"}</InlineMath>, <InlineMath>{"B"}</InlineMath>, and <InlineMath>{"C"}</InlineMath> lie on a circle, then <InlineMath>{"\\angle ABC=\\alpha/2=\\angle DAE"}</InlineMath>. Since we are trying to find the coordinates of <InlineMath>{"A'"}</InlineMath> in parametric form, then one way we can figure this out is by determining how much we must translate point <InlineMath>{"A"}</InlineMath> to reach point <InlineMath>{"A'"}</InlineMath>.  We know that <InlineMath>{"AA' = \\sqrt{2}"}</InlineMath> and <InlineMath>{"\\angle A'AE = \\angle A'AD+ \\angle DAE= \\pi/4 + \\alpha/2"}</InlineMath>. Let point <InlineMath>{"A'"}</InlineMath> be <InlineMath>{"m"}</InlineMath> units higher than point <InlineMath>{"a"}</InlineMath> on the <InlineMath>{"y"}</InlineMath>-axis, and <InlineMath>{"n"}</InlineMath> units to the left or right from point <InlineMath>{"A"}</InlineMath> in the <InlineMath>{"x"}</InlineMath>-axis.

            </Text>
            <Text>
                Using basic trigonometric ratios, it follows that
            </Text>
            <BlockMath>
                {"\\begin{align*} \\sin(\\angle A'AE) &= \\frac{m}{\\sqrt{2}} \\\\ m &= \\sqrt{2}\\sin\\left(\\frac{\\pi}{4}+\\frac{\\alpha}{2}\\right)\\end{align*}"}
            </BlockMath>
            <Text>
                and
            </Text>
            <BlockMath>
                {"\\begin{align*} \\cos(\\angle A'AE) &= \\frac{n}{\\sqrt{2}}\\\\ n &= \\sqrt{2}\\cos\\left(\\frac{\\pi}{4}+\\frac{\\alpha}{2}\\right).\\end{align*}"}
            </BlockMath>
            <Text>
                Thus,
            </Text>
            <BlockMath>{"A' = \\left(r\\cos\\alpha + \\sqrt{2}\\cos\\left(\\frac{\\pi}{4}+\\frac{\\alpha}{2}\\right), r\\sin\\alpha +\\sqrt{2}\\sin\\left(\\frac{\\pi}{4}+\\frac{\\alpha}{2}\\right) \\right)."}</BlockMath>

            <Heading as="h2" size="md">Coordinates of <InlineMath>C</InlineMath> and <InlineMath>C'</InlineMath></Heading>

            <Text>Next, let <InlineMath>{"B'"}</InlineMath>, <InlineMath>{"B"}</InlineMath>, <InlineMath>{"C'"}</InlineMath>, and <InlineMath>{"C"}</InlineMath> be the intersections of each wall in the hallway and the <InlineMath>{"x"}</InlineMath>-axis, as shown in Figure 1.5. To determine the parametrization of the aforementioned points, we first must find the parametrization of <InlineMath>{"D"}</InlineMath>, which can do in a similar fashion to <InlineMath>{"A'"}</InlineMath>. Let point <InlineMath>{"D"}</InlineMath> be <InlineMath>{"m_1"}</InlineMath> units higher on the <InlineMath>{"y"}</InlineMath>-axis and <InlineMath>{"n_1"}</InlineMath> units to the left or right on the <InlineMath>{"x"}</InlineMath>-axis than <InlineMath>{"A"}</InlineMath>. Thus,</Text>
            <BlockMath> {"\\sin(\\angle DAE) = \\sin\\left(\\frac{\\alpha}{2}\\right)= m_1\\\\ \\cos(\\angle DAE) = \\cos\\left(\\frac{\\alpha}{2}\\right) =n_1 \\end{aligned}"}</BlockMath>
            <Text>which means that</Text>
            <BlockMath>{"D=\\left(r\\cos\\alpha + \\cos\\left(\\frac{\\alpha}{2}\\right), r\\sin\\alpha + \\sin\\left(\\frac{\\alpha}{2}\\right)\\right)."}</BlockMath>
            <Text>Using the coordinates of point <InlineMath>{"D"}</InlineMath> and point <InlineMath>{"A'"}</InlineMath>, we can find the general equation of right-most vertical wall</Text>
            <BlockMath>{"\\begin{aligned} y - \\left(r\\sin\\alpha + \\sin\\left(\\frac{\\alpha}{2}\\right)\\right) = \\frac{\\sqrt{2}\\sin\\left(\\frac{\\pi}{4}+\\frac{\\alpha}{2}\\right)-\\sin\\left(\\frac{\\alpha}{2}\\right)}{\\sqrt{2}\\cos\\left(\\frac{\\pi}{4}+\\frac{\\alpha}{2}\\right)-\\cos\\left(\\frac{\\alpha}{2}\\right)}\\left(x-\\left(r\\cos\\alpha + \\cos\\left(\\frac{\\alpha}{2}\\right)\\right)\\right). \\end{aligned}"}</BlockMath>
            <Text>Now we find the <InlineMath>{"x"}</InlineMath>-intercept, which is when <InlineMath>{"y=0"}</InlineMath>,</Text>
            <BlockMath>{"\\begin{aligned} -r\\sin\\alpha -\\sin\\left(\\frac{\\alpha}{2}\\right) &= \\frac{\\sqrt{2}\\sin\\left(\\frac{\\pi}{4}\\right)\\cos\\left(\\frac{\\alpha}{2}\\right)+\\sqrt{2}\\cos\\left(\\frac{\\pi}{4}\\right)\\sin\\left(\\frac{\\alpha}{2}\\right)-\\sin\\left(\\frac{\\alpha}{2}\\right)}{\\sqrt{2}\\cos\\left(\\frac{\\pi}{4}\\right)\\cos\\left(\\frac{\\alpha}{2}\\right)-\\sqrt{2}\\sin\\left(\\frac{\\pi}{4}\\right)\\sin\\left(\\frac{\\alpha}{2}\\right)-\\cos\\left(\\frac{\\alpha}{2}\\right)}\\\\&\\left(x-r\\cos\\alpha - \\cos\\left(\\frac{\\alpha}{2}\\right)\\right)\\\\ -r\\sin\\alpha -\\sin\\left(\\frac{\\alpha}{2}\\right) &= \\frac{\\cos\\left(\\frac{\\alpha}{2}\\right)+\\sin\\left(\\frac{\\alpha}{2}\\right)-\\sin\\left(\\frac{\\alpha}{2}\\right)}{\\cos\\left(\\frac{\\alpha}{2}\\right)-\\sin\\left(\\frac{\\alpha}{2}\\right)-\\cos\\left(\\frac{\\alpha}{2}\\right)}\\left(x-r\\cos\\alpha - \\cos\\left(\\frac{\\alpha}{2}\\right)\\right)\\\\ -r\\sin\\alpha -\\sin\\left(\\frac{\\alpha}{2}\\right) &= \\frac{1}{-\\tan\\left(\\frac{\\alpha}{2}\\right)}\\left(x-r\\cos\\alpha - \\cos\\left(\\frac{\\alpha}{2}\\right)\\right)\\\\ x&=r\\sin \\left(\\alpha\\right)\\tan \\left(\\frac{\\alpha}{2}\\right)+\\sin \\left(\\frac{\\alpha}{2}\\right)\\tan \\left(\\frac{\\alpha}{2}\\right) +r\\cos\\alpha +\\cos\\left(\\frac{\\alpha}{2}\\right)\\\\ x&= r\\sin \\left(\\alpha\\right)\\tan \\left(\\frac{\\alpha}{2}\\right) + \\frac{\\sin ^2\\left(\\frac{\\alpha}{2}\\right)}{\\cos \\left(\\frac{\\alpha}{2}\\right)}+\\frac{\\cos ^2\\left(\\frac{\\alpha}{2}\\right)}{\\cos \\left(\\frac{\\alpha}{2}\\right)}+r\\cos\\left(\\alpha\\right) \\\\ x&= r\\sin \\left(\\alpha\\right)\\tan \\left(\\frac{\\alpha}{2}\\right) +r\\cos\\left(\\alpha\\right) +\\frac{1}{\\cos\\left(\\frac{\\alpha}{2}\\right)} \\end{aligned}"}</BlockMath>
            <Text>Thus,</Text>
            <BlockMath>{"C'=\\left(r\\sin \\left(\\alpha\\right)\\tan \\left(\\frac{\\alpha}{2}\\right) +r\\cos\\left(\\alpha\\right) +\\frac{1}{\\cos\\left(\\frac{\\alpha}{2}\\right)},0\\right)."}</BlockMath>
            <Text>Finding the coordinates of <InlineMath>{"C"}</InlineMath> is slightly easier as we know the slope of the wall passing through <InlineMath>{"A"}</InlineMath> and <InlineMath>{"C"}</InlineMath> is the same as the rightmost wall, which is <InlineMath>{"-1/\\tan(\\alpha/2)"}</InlineMath>.</Text>
            <BlockMath>{"\\begin{aligned}y-r\\sin\\left(\\alpha\\right)&=-\\frac{1}{\\tan\\left(\\frac{\\alpha}{2}\\right)}\\left(x-r\\cos\\left(\\alpha\\right)\\right)\\\\ x&=r\\sin \\left(\\alpha\\right)\\tan \\left(\\frac{\\alpha}{2}\\right)+r\\cos \\left(\\alpha\\right) \\end{aligned}"}</BlockMath>
            <Text>Thus,</Text>
            <BlockMath>{"C=\\left(r\\sin \\left(\\alpha\\right)\\tan \\left(\\frac{\\alpha}{2}\\right)+r\\cos \\left(\\alpha\\right),0\\right)."}</BlockMath>
        </Stack>
    )
}