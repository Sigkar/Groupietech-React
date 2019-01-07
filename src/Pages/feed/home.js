import React, { Component } from 'react';
import { PageContainer, ContentFeatureComponent, TextPostComponent, FlexContainer, FeatureContent, HalfFeature } from '../../Components/cards.js';
import { StaggerChildren, LoadFade, Fade } from '../../Components/staticposes.js';



export class Home extends Component {
    state = { loadAnimations: false }
    componentWillMount() {

    }
    componentDidMount() {
        window.scrollTo(0, 0);
        setTimeout(this.toggleLoadAnimations, 500);
    }
    toggleLoadAnimations = () => (this.setState({ loadAnimations: true }));
    render() {
        const { loadAnimations } = this.state;
        return (
            <PageContainer>
                <StaggerChildren pose={loadAnimations ? 'open' : 'closed'}>
                    <LoadFade>
                        <ContentFeatureComponent imageLink="https://picsum.photos/600/599/?random"
                            title="CHIA VAPORWAVE"
                            description="Tilde quinoa vexillologist shoreditch. Single-origin coffee keffiyeh cornhole hot chicken. Tbh pug chia asymmetrical gluten-free sustainable tumblr squid deep"
                            day="14"
                            month="04"
                            year="2019"
                            hour="2"
                            min="40"
                            ampm="PM" />
                    </LoadFade>
                    <LoadFade>
                        <TextPostComponent
                            title="TEXT POST"
                            post="Tilde quinoa vexillologist shoreditch. Single-origin coffee keffiyeh cornhole hot chicken. Tbh pug chia asymmetrical gluten-free sustainable tumblr squid deep. Kinfolk everyday carry marfa, franzen air plant squid sustainable coloring book plaid ramps tacos green juice cardigan"
                            day="14"
                            month="04"
                            year="2019"
                            hour="2"
                            min="40"
                            ampm="PM" />
                    </LoadFade>
                    <LoadFade>
                        <ContentFeatureComponent imageLink="https://picsum.photos/600/600/?random"
                            title="DUMMY DATA"
                            description="Kinfolk everyday carry marfa, franzen air plant squid sustainable coloring book plaid ramps tacos green juice cardigan"
                            day="04"
                            month="01"
                            year="2019"
                            hour="7"
                            min="30"
                            ampm="PM" />
                    </LoadFade>
                    <LoadFade>
                        <ContentFeatureComponent imageLink="https://picsum.photos/600/601/?random"
                            title="TOFU STARTUP"
                            description="Lumbersexual selfies austin coloring book cloud bread. Everyday carry hell of beard taiyaki, raclette schlitz "
                            day="05"
                            month="02"
                            year="2019"
                            hour="5"
                            min="15"
                            ampm="PM" />
                    </LoadFade>
                    <LoadFade>
                        <ContentFeatureComponent imageLink="https://picsum.photos/610/601/?random"
                            title="POUTINE WILLIAMSBURG"
                            description="Single-origin coffee listicle tousled, cornhole vinyl letterpress kogi green juice kale chips tofu. Pug 90's cronut man bun photo booth you probably haven't heard of them knausgaard lumbersexual copper mug flannel gluten-free chartreuse narwhal fixie."
                            day="05"
                            month="02"
                            year="2019"
                            hour="5"
                            min="15"
                            ampm="PM" />
                    </LoadFade>
                    <LoadFade>
                        <ContentFeatureComponent imageLink="https://picsum.photos/62c0/601/?random"
                            title="90'S ALL THAT"
                            description="Brunch 90's taiyaki, jianbing plaid skateboard 8-bit mustache pour-over quinoa. Cronut butcher aesthetic knausgaard mixtape artisan microdosing bespoke normcore polaroid shaman YOLO"
                            day="05"
                            month="02"
                            year="2019"
                            hour="5"
                            min="15"
                            ampm="PM" />
                    </LoadFade>
                </StaggerChildren>
            </PageContainer>
        )
    }
}