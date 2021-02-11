import React, { Component } from 'react';
import { 
    Container, 
    ListGroup, 
    ListGroupItem, 
    Button,
    Card, 
    CardText, 
    CardBody, 
    CardLink,
    CardTitle, 
    CardSubtitle ,
    CardHeader,
    CardFooter
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class List extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    render () {
        const { items } = this.props.item;;
        return (
            <Container fluid className="home-page">
                <ListGroup>
                    <TransitionGroup className="list">
                        {items.map(({ _id, name, link, caption }) => (
                            <Card className="list-item">
                                <CardHeader className="item-name">
                                    <CardBody>
                                        <CardTitle tag="h5"><img src="actor.png" alt="actor" className="profile" />{name}</CardTitle>
                                    </CardBody>
                                </CardHeader>
                                
                                <CardBody>
                                    <img width="325px" src={link} alt="Meme" />
                                </CardBody>
                                <CardBody>
                                    <CardText tag="h6">{caption}</CardText>
                                </CardBody>
                                <CardFooter className="item-name">
                                    <CardBody>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >Delete</Button>
                                    </CardBody>
                                </CardFooter>
                            </Card>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

List.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(List);