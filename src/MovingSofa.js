import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { Heading, Stack, Text, Image, Center, Link, Button } from '@chakra-ui/react';
import { ReactComponent as FigureOne } from './assets/images/mysofa.svg';
import { ReactComponent as FigureTwo } from './assets/images/derivingpoints.svg';
import { ReactComponent as FigureThree } from './assets/images/longestsofa.svg';
import { ReactComponent as FigureFour } from './assets/images/long.svg';
import Figure from './components/Figure';
import { AttachmentIcon } from '@chakra-ui/icons';
import Pdf from './assets/other/Longest_Sofa.pdf';

export default function MovingSofa() {
    return (
        <Stack p="0 10vw 50px 10vw" spacing={6} as="samp">
            <Heading>Extension of The Moving Sofa Problem</Heading>
            <Text>Ronald Jin - January 15, 2022</Text>
            <Link href={Pdf}><Button leftIcon={<AttachmentIcon />} colorScheme='teal' variant='solid' w="fit-content">Download PDF</Button></Link>
            <Heading size="lg">Problem</Heading>
            <Text>What is the longest length of a shape that can be maneuvered through a unit-width L-shaped corridor?</Text>
            <Heading as="h2" size="lg">Preamble</Heading>
            <Text>This article is only a portion of the project. In the full manuscript, I not only derive the "longest sofa," but also the sofa of largest area for elliptical rotation paths and the formulas for the envelopes of each sofa.</Text>
            <Figure figure={<FigureOne />} num={1} caption={"Optimal sofa with an elliptical rotation path (blue) and Gerver's sofa (red)"} />
            <Text>Not everything in this essay is original. This essay is largely inspired by <Link color='teal.500' href="https://math.stackexchange.com/questions/1787466/modelling-the-moving-sofa">this StackExchange post</Link>. The "Hallway Summary," on top of many other things, found in section 1.4 for elliptical rotation paths was derived by <Link color='teal.500' href="https://math.stackexchange.com/users/255730/intelligenti-pauca">intelligenti-pauca</Link> on StackExchange, but my attempt at deriving it is original as his work did not include any derivation. Additionally, intelligenti-pauca provided a potential longest sofa in his post which was ultimately what sparked my interest in trying to determine the longest sofa. However, the sofa I found is not the same as his and it appears that his sofa is slightly smaller than mine.</Text>
            <Heading as="h2" size="lg">1 Parameterizing the Hallway</Heading>
            <Text>For the purposes of this exploration, it will useful to parameterize the hallway. For simplicity, only elliptical and circular rotation paths will be considered, though it is pretty clear that the sofa of largest area does not follow an elliptical rotation path. However, the largest area of a sofa with an elliptical rotation path is quite close as it has an area of about 2.21786 compared to the 2.21953 of the <em>Gerver Sofa</em>. Below is my attempt at deriving the hallway's parameters I saw on the StackExchange post.</Text>

            <Heading as="h3" size="md">1.1 Coordinates of <InlineMath>A</InlineMath> and <InlineMath>A'</InlineMath> (refer to fig. 2)</Heading>
            <Figure figure={<FigureTwo />} num={2} caption={"Parameterizing the points on the hallway"} />
            <Text>
                Firstly, it is well-known that the parametric form of a circle is described by <InlineMath>{"(r\\cos\\alpha, r\\sin\\alpha)"}</InlineMath>, where <InlineMath>{"r"}</InlineMath> is the radius of the circle and <InlineMath>{"0\\leq \\alpha \\leq\\pi"}</InlineMath>.
                Since point <InlineMath>{"A"}</InlineMath> moves in a circular rotation path, then the coordinates of <InlineMath>{"A"}</InlineMath> are described by <InlineMath>{"(r\\cos\\alpha, r\\sin\\alpha)"}</InlineMath> for <InlineMath>{"0\\leq \\alpha\\leq \\pi"}</InlineMath>. From here, the coordinates of <InlineMath>{"A'"}</InlineMath> can be derived. Since <InlineMath>{"A"}</InlineMath>, <InlineMath>{"B"}</InlineMath>, and <InlineMath>{"C"}</InlineMath> lie on a circle, then <InlineMath>{"\\angle ABC=\\alpha/2=\\angle DAE"}</InlineMath>. Since we are trying to find the coordinates of <InlineMath>{"A'"}</InlineMath> in parametric form, then one way we can figure this out is by determining how much we must translate point <InlineMath>{"A"}</InlineMath> to reach point <InlineMath>{"A'"}</InlineMath>.  We know that <InlineMath>{"AA' = \\sqrt{2}"}</InlineMath> and <InlineMath>{"\\angle A'AE = \\angle A'AD+ \\angle DAE= \\pi/4 + \\alpha/2"}</InlineMath>. Let point <InlineMath>{"A'"}</InlineMath> be <InlineMath>{"m"}</InlineMath> units higher than point <InlineMath>{"a"}</InlineMath> on the <InlineMath>{"y"}</InlineMath>-axis, and <InlineMath>{"n"}</InlineMath> units to the left or right from point <InlineMath>{"A"}</InlineMath> in the <InlineMath>{"x"}</InlineMath>-axis.
                \
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

            <Heading as="h3" size="md">1.2 Coordinates of <InlineMath>C</InlineMath> and <InlineMath>C'</InlineMath></Heading>

            <Text>Next, let <InlineMath>{"B'"}</InlineMath>, <InlineMath>{"B"}</InlineMath>, <InlineMath>{"C'"}</InlineMath>, and <InlineMath>{"C"}</InlineMath> be the intersections of each wall in the hallway and the <InlineMath>{"x"}</InlineMath>-axis, as shown in Figure 2. To determine the parametrization of the aforementioned points, we first must find the parametrization of <InlineMath>{"D"}</InlineMath>, which can do in a similar fashion to <InlineMath>{"A'"}</InlineMath>. Let point <InlineMath>{"D"}</InlineMath> be <InlineMath>{"m_1"}</InlineMath> units higher on the <InlineMath>{"y"}</InlineMath>-axis and <InlineMath>{"n_1"}</InlineMath> units to the left or right on the <InlineMath>{"x"}</InlineMath>-axis than <InlineMath>{"A"}</InlineMath>. Thus,</Text>
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

            <Heading as="h3" size="md">1.3 Coordinates of <InlineMath>B</InlineMath> and <InlineMath>B'</InlineMath></Heading>

            <Text>Finding the coordinates of <InlineMath>{"B"}</InlineMath> and <InlineMath>{"B'"}</InlineMath> is very similar to <InlineMath>{"C"}</InlineMath> and <InlineMath>{"C'"}</InlineMath>. Applying a similar method, we get that</Text>
            <BlockMath>{"B'=\\left(r\\cos \\left(\\alpha\\right) -r(1+\\cos(\\alpha)) - \\frac{1}{\\sin \\left(\\frac{\\alpha}{2}\\right)},0\\right)."}</BlockMath>
            and
            <BlockMath>{"B=\\left(r\\cos \\left(\\alpha\\right)-r\\cos(\\alpha)-1,0\\right)"}</BlockMath>

            <Heading as="h3" size="md">1.4 Hallway Summary</Heading>

            <Text>In conclusion, we found the parameterization of the hallway when the rotation path is a <em>circle</em> to be</Text>
            <BlockMath>{"\\begin{aligned}A &= (r\\cos\\alpha, r\\sin\\alpha)\\\\ A' &=  \\left(r\\cos\\alpha + \\sqrt{2}\\cos\\left(\\frac{\\pi}{4}+\\frac{\\alpha}{2}\\right), r\\sin\\alpha +\\sqrt{2}\\sin\\left(\\frac{\\pi}{4}+\\frac{\\alpha}{2}\\right) \\right)\\\\ B &=\\left(r\\cos \\left(\\alpha\\right)-r\\cos(\\alpha)-1,0\\right)\\\\ B' &=\\left(r\\cos \\left(\\alpha\\right) -r(1+\\cos(\\alpha)) - \\frac{1}{\\sin \\left(\\frac{\\alpha}{2}\\right)},0\\right)\\\\ C &=\\left(r\\sin \\left(\\alpha\\right)\\tan \\left(\\frac{\\alpha}{2}\\right)+r\\cos \\left(\\alpha\\right),0\\right)\\\\ C' &=\\left(r\\sin \\left(\\alpha\\right)\\tan \\left(\\frac{\\alpha}{2}\\right) +r\\cos\\left(\\alpha\\right) +\\frac{1}{\\cos\\left(\\frac{\\alpha}{2}\\right)},0\\right).\\end{aligned}"}</BlockMath>
            <Text>According the the StackExchange post, though, for <em>elliptical</em> rotation paths, we would have the below parameterization</Text>
            <BlockMath>{"\\begin{aligned}A &= (r\\cos\\alpha, t\\sin\\alpha)\\\\ A' &=  \\left(r\\cos\\alpha + \\sqrt{2}\\cos\\left(\\frac{\\pi}{4}+\\frac{\\alpha}{2}\\right), t\\sin\\alpha +\\sqrt{2}\\sin\\left(\\frac{\\pi}{4}+\\frac{\\alpha}{2}\\right) \\right)\\\\ B &=\\left(r\\cos \\left(\\alpha\\right)-t\\cos(\\alpha)-1,0\\right)\\\\ B' &=\\left(r\\cos \\left(\\alpha\\right) -t(1+\\cos(\\alpha)) - \\frac{1}{\\sin \\left(\\frac{\\alpha}{2}\\right)},0\\right)\\\\ C &=\\left(t\\sin \\left(\\alpha\\right)\\tan \\left(\\frac{\\alpha}{2}\\right)+r\\cos \\left(\\alpha\\right),0\\right)\\\\ C' &=\\left(t\\sin \\left(\\alpha\\right)\\tan \\left(\\frac{\\alpha}{2}\\right) +r\\cos\\left(\\alpha\\right) +\\frac{1}{\\cos\\left(\\frac{\\alpha}{2}\\right)},0\\right). \\end{aligned}"}</BlockMath>
            $$
            <Text>which essentially changed several of the "<InlineMath>{"r"}</InlineMath>'s" into "<InlineMath>{"t"}</InlineMath>'s", where <InlineMath>{"t"}</InlineMath> is the ellipse's axis along the <InlineMath>{"y"}</InlineMath>-axis and <InlineMath>{"r"}</InlineMath> is the ellipse's axis along the <InlineMath>{"x"}</InlineMath>-axis. What is somewhat confusing is the fact the elliptical parameterization appears almost identical to its circular counterpart. Since the rotation path is an ellipse, then the derivation used for circular rotation paths shouldn't work as <InlineMath>{"\\angle ABC"}</InlineMath>, for example, would no longer be half of <InlineMath>{"\\angle AOC"}</InlineMath>. However, the author of the post explained that <InlineMath>{"\\alpha"}</InlineMath> is not angle <InlineMath>{"AOC"}</InlineMath>, where <InlineMath>{"O"}</InlineMath> is the origin, unless the rotation path is a circle. <InlineMath>{"\\alpha"}</InlineMath> is actually an angle <InlineMath>{"AO'C"}</InlineMath> where <InlineMath>{"O'"}</InlineMath> moves along the <InlineMath>{"x"}</InlineMath>-axis when the rotation path is non-circular such that <InlineMath>{"ABC"}</InlineMath> is <InlineMath>{"\\alpha/2"}</InlineMath>. Since circular rotation paths are a subset of elliptical rotation paths, then we will use the paramterization of the hallway for elliptical rotation paths in the following sections.</Text>



            <Heading as="h2" size="lg">2 Extension of the <em>Moving Sofa Problem</em></Heading>

            <Heading as="h3" size="md">2.1 Introduction</Heading>

            <Text>I noticed that there is almost no information online about a "longest sofa" that can be rotated around a hallway, or even a longest curve. Of course, there is a simple optimization problem often found in textbooks about finding the longest line or "pipe" than can be rotated around a hallway which, for unit-width hallways, has a length of <InlineMath>{"2\\sqrt{2}\\approx 2.828"}</InlineMath>. Thus, I decided to use a "<em>Moving Sofa Problem</em>-style" method to attempt it myself.</Text>

            <Heading as="h3" size="md">2.2 Maximizing the Length</Heading>

            <Text>Using the information in section 1.4, it seems possible that a sofa of maximum length can be derived. The first thing that came to mind was to maximize the distance between points <InlineMath>{"B'"}</InlineMath> and <InlineMath>{"C'"}</InlineMath>. Recall that</Text>

            <BlockMath>{"\\begin{aligned} B' &=\\left(r\\cos \\left(\\alpha\\right) -t(1+\\cos(\\alpha)) - \\frac{1}{\\sin \\left(\\frac{\\alpha}{2}\\right)},0\\right)\\\\ C' &=\\left(t\\sin \\left(\\alpha\\right)\\tan \\left(\\frac{\\alpha}{2}\\right) +r\\cos\\left(\\alpha\\right) +\\frac{1}{\\cos\\left(\\frac{\\alpha}{2}\\right)},0\\right).\\end{aligned}"}</BlockMath>

            <Text>Now, we want to find out when <InlineMath>{"C'_x"}</InlineMath> is at it's minimum, and when <InlineMath>{"B'_x"}</InlineMath> is at it's maximum, and the distance between these two <InlineMath>{"x"}</InlineMath> values is the length of the sofa. In general, to optimize a function <InlineMath>{"f(x_1,x_2,...,x_n)"}</InlineMath>, you must solve</Text>

            <BlockMath>{"\\begin{aligned} \\nabla f(x_1,x_2,...,x_n) = \\left[\\begin{array}{c} \\dfrac{\\partial f}{\\partial x_1}(x_1,x_2,...,x_n)\\\\ \\dfrac{\\partial f}{\\partial x_2}(x_1,x_2,...,x_n)\\\\ \\vdots\\\\ \\dfrac{\\partial f}{\\partial x_n}(x_1,x_2,...,x_n) \\end{array} \\right] = \\left[\\begin{array}{c} 0\\\\ 0\\\\ \\vdots\\\\ 0 \\end{array} \\right] \\end{aligned}"}</BlockMath>

            <Heading as="h3" size="md">2.3 Maximizing <InlineMath>{"B'_x"}</InlineMath></Heading>

            <Text>Let's first maximize <InlineMath>{"B'_x"}</InlineMath>,</Text>

            <BlockMath>{"\\begin{aligned} \\begin{cases} \\frac{\\partial}{\\partial \\alpha} B'_x(\\alpha,r,t) &= t\\sin\\left({\\alpha}\\right)-r\\sin\\left({\\alpha}\\right)+\\dfrac{\\cos\\left(\\frac{{\\alpha}}{2}\\right)}{2\\sin^2\\left(\\frac{{\\alpha}}{2}\\right)}=0\\\\ \\frac{\\partial}{\\partial r} B'_x(\\alpha,r,t) &= \\cos\\left({\\alpha}\\right) =0\\\\ \\frac{\\partial}{\\partial t} B'_x(\\alpha,r,t) &= -1-\\cos(\\alpha) =0\\\\\\end{cases}\\end{aligned}"}</BlockMath>

            <Text>We can easily determine that <InlineMath>{"\\frac{\\partial}{\\partial r} B'_x(\\alpha,r,t) = \\cos\\alpha=0"}</InlineMath> when <InlineMath>{"\\alpha=\\pi/2"}</InlineMath> and <InlineMath>{"\\frac{\\partial}{\\partial t} B'_x(\\alpha,r,t) = -1-\\cos\\alpha=0"}</InlineMath> when <InlineMath>{"\\alpha = \\pi"}</InlineMath>. However, none of these values of <InlineMath>{"\\alpha"}</InlineMath> satisfy the system of equations meaning that there isn't a local maximum or minimum. This means that we must test for an absolute maximum using the endpoints. We know that <InlineMath>{"0\\leq t \\leq 1"}</InlineMath> as the rotation path must be within the hallway. We also know that <InlineMath>{"0\\leq\\alpha\\leq\\pi"}</InlineMath>. We don't, however, know of an upper bound for <InlineMath>{"r"}</InlineMath> yet. Let's first test the endpoints of the interval <InlineMath>{"0\\leq\\alpha\\leq\\pi"}</InlineMath>. However, we know that <InlineMath>{"B'_x"}</InlineMath> is undefined for <InlineMath>{"\\alpha = 0"}</InlineMath> as the wall containing points <InlineMath>{"G"}</InlineMath> and <InlineMath>{"A'"}</InlineMath> is parallel to the <InlineMath>{"x"}</InlineMath>-axis, so we can only test <InlineMath>{"\\alpha = \\pi"}</InlineMath> </Text>

            <BlockMath>{"r\\cos \\left(\\pi\\right) -t(1+\\cos(\\pi)) - \\frac{1}{\\sin \\left(\\frac{\\pi}{2}\\right)} = -r-1."}</BlockMath>

            <Text>The above result isn't helpful as, in order to maximize <InlineMath>{"-r-1"}</InlineMath>, we simply need the smallest value of <InlineMath>{"r"}</InlineMath> which is 0. It's no surprise that <InlineMath>{"B'_x"}</InlineMath> is maximized when <InlineMath>{"r=0"}</InlineMath> as the rotation path has no width meaning that the width of the sofa is at most the width of the hallway. However, what about for values of <InlineMath>{"r>0"}</InlineMath>? Let's test the endpoints of the interval <InlineMath>{"0\\leq t \\leq 1"}</InlineMath>. Starting with <InlineMath>{"t=0"}</InlineMath>, we get the function <InlineMath>{"B'_x(\\alpha,r) = r\\cos \\left(\\alpha\\right) -(0)(1+\\cos(\\alpha)) - \\frac{1}{\\sin \\left(\\frac{\\alpha}{2}\\right)} = r\\cos \\left(\\alpha\\right) - \\frac{1}{\\sin \\left(\\frac{\\alpha}{2}\\right)}."}</InlineMath> Maximizing the 2-variable function <InlineMath>{"B'_x(\\alpha,r) = r\\cos \\left(\\alpha\\right) - \\frac{1}{\\sin \\left(\\frac{\\alpha}{2}\\right)}"}</InlineMath> using partial derivatives results in <InlineMath>{"\\alpha = \\pi/2"}</InlineMath> and <InlineMath>{"r=\\sqrt{2}/2"}</InlineMath>; using these parameters, we find that <InlineMath>{"B' = (-\\sqrt{2},0)"}</InlineMath>. When <InlineMath>{"t=1"}</InlineMath>, we get the 2-variable function <InlineMath>{"B'_x(\\alpha,r) = r\\cos \\left(\\alpha\\right) -(1+\\cos(\\alpha)) - \\frac{1}{\\sin \\left(\\frac{\\alpha}{2}\\right)}"}</InlineMath>. Maximizing this function using partial derivatives results in <InlineMath>{"\\alpha = \\pi/2"}</InlineMath> and <InlineMath>{"r=1+\\frac{\\sqrt{2}}{2}"}</InlineMath>; using these parameters, we find that <InlineMath>{"B' = (-\\sqrt{2}-1,0)"}</InlineMath>. Since the maximum value for <InlineMath>{"B'_x"}</InlineMath> is farther from the origin when <InlineMath>{"t=1"}</InlineMath> than when <InlineMath>{"t=0"}</InlineMath>, the longest sofa occurs when <InlineMath>{"t=1"}</InlineMath>.</Text>


            <Heading as="h3" size="md">2.4 Minimizing <InlineMath>C'_x</InlineMath></Heading>

            <BlockMath>{"\\begin{aligned} \\begin{cases} \\frac{\\partial}{\\partial \\alpha} C'_x(\\alpha,r,t) &= \\dfrac{t\\sec^2\\left(\\frac{{\\alpha}}{2}\\right)\\sin\\left({\\alpha}\\right)}{2}-r\\sin\\left({\\alpha}\\right)+t\\tan\\left(\\dfrac{{\\alpha}}{2}\\right)\\cos\\left({\\alpha}\\right)\\\\&+\\dfrac{\\sin\\left(\\frac{{\\alpha}}{2}\\right)}{2\\cos^2\\left(\\frac{{\\alpha}}{2}\\right)}=0\\\\ \\frac{\\partial}{\\partial r} C'_x(\\alpha,r,t) &= \\cos\\left({\\alpha}\\right) =0\\\\ \\frac{\\partial}{\\partial t} C'_x(\\alpha,r,t) &= \\tan\\left(\\dfrac{{\\alpha}}{2}\\right)\\sin\\left({\\alpha}\\right) =0 \\end{cases} \\end{aligned}"}</BlockMath>

            <Text><InlineMath>{"\\frac{\\partial}{\\partial r} C'_x(\\alpha,r,t)=\\cos\\alpha = 0"}</InlineMath> when <InlineMath>{"\\alpha=\\pi/2"}</InlineMath> or</Text>

            <BlockMath>{"\\begin{aligned} \\frac{\\partial}{\\partial t} C'_x(\\alpha,r,t) = \\tan\\left(\\dfrac{{\\alpha}}{2}\\right)\\sin\\left({\\alpha}\\right) &=0\\\\ \\frac{1 -\\cos\\left(\\alpha\\right)}{\\sin\\left(\\alpha\\right)}\\sin\\left(\\alpha\\right)&=0\\\\ \\cos(\\alpha)&=1\\\\ \\alpha &=0. \\end{aligned}"}</BlockMath>

            <Text>Again, this means that there isn't a local minimum or maximum, meaning we have to test the endpoints of the variables. Using the same methods we used in section 2.3, we get that, when <InlineMath>{"\\alpha=0"}</InlineMath>, <InlineMath>{"C'_x(r,t) = r+1"}</InlineMath> which is again not helpful. When <InlineMath>{"t=0"}</InlineMath>, we have a critical point when <InlineMath>{"\\alpha = \\pi/2"}</InlineMath> and <InlineMath>{"r=\\sqrt{2}/2"}</InlineMath>; using these parameters, we find that <InlineMath>{"C' = (\\sqrt{2},0)"}</InlineMath>. When <InlineMath>{"t=1"}</InlineMath>, we have a critical point when <InlineMath>{"\\alpha = \\pi/2"}</InlineMath> and <InlineMath>{"r=1+\\frac{\\sqrt{2}}{2}"}</InlineMath>; using these parameters, we find that <InlineMath>{"C' = (1+\\sqrt{2},0)"}</InlineMath>. Since the minimum of <InlineMath>{"C'_x"}</InlineMath> is farther from the origin when <InlineMath>{"t=1"}</InlineMath> than when <InlineMath>{"t=0"}</InlineMath>, the longest sofa occurs at <InlineMath>{"t=1"}</InlineMath>. Since the maximum value of <InlineMath>{"B'_x"}</InlineMath> is <InlineMath>{"-\\sqrt{2}-1"}</InlineMath> and the minimum value of <InlineMath>{"C'_x"}</InlineMath> is <InlineMath>{"\\sqrt{2}+1"}</InlineMath>, the longest sofa has a length of <InlineMath>{"2\\sqrt{2}+2\\approx 4.828"}</InlineMath>.</Text>

            <Heading as="h3" size="md">2.5 The Longest Sofa</Heading>
            <Figure figure={<FigureThree />} num={3} caption={"Graph of the upper (blue) and lower (red) envelopes forming the longest sofa"} />
            <Text>In section 2.4, we found that when <InlineMath>{"t=1"}</InlineMath> and <InlineMath>{"r=1+\\sqrt{2}/2"}</InlineMath>, we have a sofa of longest length for sofas with an elliptical rotation path. Using the value of these parameters, we can graph the sofa. Since this article is only a portion of my main project, the section where I derived the equations of the envelopes is omitted. Regardless, when the equations of the envelopes are plotted, we get figure 3.</Text>

            <Figure figure={<FigureFour />} num={4} caption={"Solid outline of the longest sofa"} />

            <Text>In conclusion, the longest sofa has parameters <InlineMath>{"(r,t)=(1+\\sqrt{2}/2,1)"}</InlineMath> and has a length of <InlineMath>{"2+2\\sqrt{2}\\approx 4.828"}</InlineMath>, which is exactly 2 units longer than the longest straight line that can rotate around a unit-width corner. Actually, there isn't really such thing as <em>the</em> longest sofa, as there are infinite sofas with the same length, or maybe even greater (presumably as the sofa of largest area with an elliptical rotation path is only slightly smaller than Gerver's sofa), than the one shown above. This is because there are infinite subsets of the shape shown in figure 4 that can have the same length. If there is a sofa with a longer length then the one found in this paper, it may not be much bigger, like how the sofa of largest area found using the same methods is only slightly smaller than the <em>Gerver Sofa</em>. If you want to play with a simulation, you can visit <Link color={"teal.500"} href="https://www.geogebra.org/m/vemEtGyj>" isExternal>https://www.geogebra.org/m/vemEtGyj</Link> (credits to <Link color={"teal.500"} href="https://math.stackexchange.com/users/255730/intelligenti-pauca" isExternal>intelligenti-pauca</Link> for making this simulaiton) and change the parameters as you please.</Text>

            <Heading as="h3" size="md">2.6 Disproof of intelligenti-pauca's sofa</Heading>

            <Text>The sofa intelligenti-pauca hypothesized to be the longest sofa has the parameters <InlineMath>{"(r,t) = ((\\sqrt{5}+1)/2,1)"}</InlineMath>. It is unclear how he came up with these parameters as he provides no detail on it in his StackExchange post. If you were to use these parameters, you would get that</Text>

            <BlockMath>{"B'_x = \\dfrac{\\sqrt{5}+1}{2}\\cos \\left(\\alpha\\right) -(1+\\cos(\\alpha)) - \\frac{1}{\\sin \\left(\\frac{\\alpha}{2}\\right)}."}</BlockMath>

            <Text>To determine the length of this sofa, we must determine the maximum value of <InlineMath>{"B'_x"}</InlineMath> by taking the first derivative and finding the critical point(s).</Text>

            <BlockMath>{"\\begin{aligned} \\frac{d}{d\\alpha}\\left[r\\cos \\left(\\alpha\\right) -t(1+\\cos(\\alpha)) - \\frac{1}{\\sin \\left(\\frac{\\alpha}{2}\\right)}\\right] &=0&\\\\ t\\sin \\left(\\alpha \\right)-r\\sin \\left(\\alpha \\right)+\\frac{\\cos \\left(\\frac{\\alpha }{2}\\right)}{2\\sin ^2\\left(\\frac{\\alpha }{2}\\right)}=0 &= 0&\\\\ \\frac{2t\\sin ^2\\left(\\frac{\\alpha}{2}\\right)\\sin \\left(\\alpha\\right)-2r\\sin ^2\\left(\\frac{\\alpha}{2}\\right)\\sin \\left(\\alpha\\right)+\\cos \\left(\\frac{\\alpha}{2}\\right)}{2\\sin ^2\\left(\\frac{\\alpha}{2}\\right)} &= 0&\\\\ 2t\\sin ^2\\left(\\frac{\\alpha}{2}\\right)\\sin \\left(\\alpha\\right)-2r\\sin ^2\\left(\\frac{\\alpha}{2}\\right)\\sin \\left(\\alpha\\right)+\\cos \\left(\\frac{\\alpha}{2}\\right)) &= 0&\\\\ 2t\\sin ^2\\left(\\frac{\\alpha}{2}\\right)\\sin \\left(\\alpha\\right)-2r\\sin ^2\\left(\\frac{\\alpha}{2}\\right)\\sin \\left(\\alpha\\right)+\\cos \\left(\\frac{\\alpha}{2}\\right)&=0&\\text{let $u=\\pi/2$}\\\\ \\cos \\left(u\\right)+4\\cos \\left(u\\right)\\sin ^3\\left(u\\right)t-4\\cos \\left(u\\right)\\sin ^3\\left(u\\right)r&=0&\\\\ \\cos \\left(u\\right)\\left(1+4t\\sin ^3\\left(u\\right)-4r\\sin ^3\\left(u\\right)\\right)&=0& \\end{aligned}"}</BlockMath>

            <Text>We know that <InlineMath>{"\\cos(u) = 0"}</InlineMath> when <InlineMath>{"u = \\pi/2 + 2\\pi n"}</InlineMath> or <InlineMath>{"3\\pi/2 + 2\\pi n,n\\in \\mathbb{Z}"}</InlineMath>. Using basic algebra, we know that <InlineMath>{"1+4t\\sin ^3\\left(u\\right)-4r\\sin ^3\\left(u\\right) = 0"}</InlineMath> when <InlineMath>{"u=\\arcsin \\left(-\\sqrt[3]{\\frac{1}{4\\left(t-r\\right)}}\\right)+2\\pi n,\\:u=\\pi +\\arcsin \\left(\\sqrt[3]{\\frac{1}{4\\left(t-r\\right)}}\\right)+2\\pi n"}</InlineMath>. This means that</Text>

            <BlockMath>{"\\begin{gathered} \\alpha=\\pi +4\\pi n,\\:\\alpha=3\\pi +4\\pi n,\\:\\alpha=2\\arcsin \\left(-\\sqrt[3]{\\frac{1}{4\\left(t-r\\right)}}\\right)+4\\pi n,\\:\\alpha=2\\pi\\\\+2\\arcsin \\left(\\sqrt[3]{\\frac{1}{4\\left(t-r\\right)}}\\right)+4\\pi n \\end{gathered}"}</BlockMath>

            <Text>However, the only solutions between <InlineMath>{"\\pi"}</InlineMath> and <InlineMath>{"0"}</InlineMath> inclusive are <InlineMath>{"\\alpha = -\\pi,\\:\\alpha = 2\\arcsin \\left(\\frac{\\sqrt[3]{1 +\\sqrt{5}}}{2}\\right)\\approx 1.66484\\dots"}</InlineMath>. The maximum of <InlineMath>{"B'_x"}</InlineMath> can now be calculated to be</Text>

            <BlockMath>{"\\begin{aligned} B'_x &= \\frac{\\sqrt{5}+1}{2}\\cos\\left(2\\arcsin\\left(\\frac{\\sqrt[3]{1 +\\sqrt{5}}}{2}\\right)\\right)-(1+\\cos(2\\arcsin\\left(\\frac{\\sqrt[3]{1 +\\sqrt{5}}}{2}\\right)))\\\\&-\\frac{1}{\\sin\\left(\\frac{2\\arcsin\\left(\\frac{\\sqrt[3]{1 +\\sqrt{5}}}{2}\\right)}{2}\\right)}\\\\ &\\approx -2.410187483.... \\end{aligned}"}</BlockMath>

            <Text>It is easily verifiable that the minimum value of <InlineMath>{"C'_x"}</InlineMath> is the negative of the maximum value of <InlineMath>{"B'_x"}</InlineMath>, or in other words, <InlineMath>{"C'_x = 2.410187483..."}</InlineMath>. Thus, the length of intelligenti-pauca's sofa is <InlineMath>{"2\\times 2.410187483... = 4.8203749662..."}</InlineMath> which is slightly smaller than my sofa which has a length of <InlineMath>{"2\\sqrt{2}+2 = 4.828427124..."}</InlineMath>. The computer simulation verifies that there is a very small difference in length.</Text>

        </Stack>
    )
}