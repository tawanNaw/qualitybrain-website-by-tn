import React, { useEffect, useState } from 'react';
import { Network } from 'vis-network';
import DescriptionModal from './DescriptionModal';
import node1 from './nodeOurSolution';
import node2 from './nodeIot';
import node3 from './nodeAi';
import node4 from './nodeMicroservices';
import node5 from './nodeItSecurity';
import node6 from './nodeBlockchain';
import nodeMl from './nodeMl';
import nodeRl from './nodeRl';

const initialNodes = [node1, node2, node3, node4, node5, node6];

const NodeNetwork = () => {
    const [description, setDescription] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 1, to: 5 },
        { from: 1, to: 6 }
    ]);
    const [areAdditionalNodesVisible, setAreAdditionalNodesVisible] = useState(false);

    const handleNodeClick = (nodeId) => {
        if (nodeId === 3) { // nodeAi
            if (areAdditionalNodesVisible) {
                const newNodes = nodes.filter(node => node.id !== 7 && node.id !== 8);
                const newEdges = edges.filter(edge => edge.from !== 3 || (edge.to !== 7 && edge.to !== 8));
                setNodes(newNodes);
                setEdges(newEdges);
                setAreAdditionalNodesVisible(false);
            } else {
                const newNodes = [
                    ...nodes,
                    nodeMl,
                    nodeRl
                ];

                const newEdges = [
                    ...edges,
                    { from: 3, to: 7 },
                    { from: 3, to: 8 }
                ];

                setNodes(newNodes);
                setEdges(newEdges);
                setAreAdditionalNodesVisible(true);
            }
        }
    };

    useEffect(() => {
        const container = document.getElementById('network');
        const data = {
            nodes: nodes,
            edges: edges
        };

        const options = {
            nodes: {
                shape: 'circle',
                size: 21,
                font: {
                    size: 14,
                    color: '#000080' // Navy color for the font
                }
            },
            edges: {
                color: {
                    color: 'black'
                },
                smooth: {
                    type: 'curvedCW',
                    roundness: 0.2
                }
            },
            interaction: {
                hover: true
            },
            physics: {
                enabled: true
            }
        };

        const network = new Network(container, data, options);

        network.on("hoverNode", function () {
            container.style.cursor = 'pointer';
        });

        network.on("blurNode", function () {
            container.style.cursor = 'default';
        });

        network.on("click", function (params) {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                const node = nodes.find(node => node.id === nodeId);
                if (node && nodeId !== 3) { // Exclude nodeAi
                    setDescription(node.description);
                    setIsModalOpen(true);
                }
                handleNodeClick(nodeId);
            }
        });

    }, [nodes, edges]);

    return (
        <div>
            <div id="network" style={{ height: '500px' }} />
            <DescriptionModal
                isOpen={isModalOpen}
                description={description}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default NodeNetwork;
